import { NextRequest, NextResponse } from 'next/server';
import { getArticles, createArticle, getArticleBySlug } from '@/lib/data';
import { authors } from '@/lib/data';

// GET /api/articles - List articles with filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const params = {
      category: searchParams.get('category') || undefined,
      featured: searchParams.get('featured') === 'true' ? true : 
                searchParams.get('featured') === 'false' ? false : undefined,
      limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 10,
      page: searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1,
      search: searchParams.get('search') || undefined
    };

    const result = getArticles(params);

    return NextResponse.json({
      success: true,
      ...result
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// POST /api/articles - Create new article
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const required = ['title', 'slug', 'excerpt', 'content', 'category', 'authorId'];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Find author
    const author = authors.find(a => a.id === body.authorId);
    if (!author) {
      return NextResponse.json(
        { success: false, error: 'Author not found' },
        { status: 404 }
      );
    }

    // Check for duplicate slug
    if (getArticleBySlug(body.slug)) {
      return NextResponse.json(
        { success: false, error: 'Article with this slug already exists' },
        { status: 409 }
      );
    }

    const newArticle = createArticle({
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      coverImage: body.coverImage || 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      category: body.category,
      author: author,
      publishedAt: body.publishedAt || new Date().toISOString(),
      readTime: body.readTime || Math.ceil(body.content.split(' ').length / 200),
      tags: body.tags || [],
      featured: body.featured || false
    });

    return NextResponse.json({
      success: true,
      data: newArticle
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create article' },
      { status: 500 }
    );
  }
}
