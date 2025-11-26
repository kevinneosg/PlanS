'use client';

import { useEffect, useState } from 'react';
import { Category } from '@/lib/types';

interface CategoryFilterProps {
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/api/categories');
        const data = await res.json();
        if (data.success) {
          setCategories(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          selected === null
            ? 'bg-gradient-to-r from-sol-purple to-sol-green text-white'
            : 'bg-sol-card text-gray-400 hover:text-white hover:bg-sol-border'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.slug)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selected === category.slug
              ? 'bg-gradient-to-r from-sol-purple to-sol-green text-white'
              : 'bg-sol-card text-gray-400 hover:text-white hover:bg-sol-border'
          }`}
          style={{
            borderLeft: selected === category.slug ? 'none' : `3px solid ${category.color}`
          }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
