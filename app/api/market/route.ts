import { NextRequest, NextResponse } from 'next/server';
import { marketData, nftCollections } from '@/lib/data';

// GET /api/market - Get market data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'tokens';

    if (type === 'nfts') {
      return NextResponse.json({
        success: true,
        data: nftCollections
      });
    }

    return NextResponse.json({
      success: true,
      data: marketData
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch market data' },
      { status: 500 }
    );
  }
}
