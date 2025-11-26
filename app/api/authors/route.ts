import { NextRequest, NextResponse } from 'next/server';
import { getAuthors, getAuthorById } from '@/lib/data';

// GET /api/authors - List all authors
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const author = getAuthorById(id);
      if (!author) {
        return NextResponse.json(
          { success: false, error: 'Author not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        data: author
      });
    }

    const authors = getAuthors();

    return NextResponse.json({
      success: true,
      data: authors
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch authors' },
      { status: 500 }
    );
  }
}
