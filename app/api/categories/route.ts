import { NextRequest, NextResponse } from 'next/server';
import { getCategories, getCategoryBySlug } from '@/lib/data';

// GET /api/categories - List all categories
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const category = getCategoryBySlug(slug);
      if (!category) {
        return NextResponse.json(
          { success: false, error: 'Category not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        data: category
      });
    }

    const categories = getCategories();

    return NextResponse.json({
      success: true,
      data: categories
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
