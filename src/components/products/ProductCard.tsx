import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-[#E3D9C8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Product Image Frame */}
        <div className="relative aspect-square w-full bg-[#EDE3D3]/40 overflow-hidden">
          <Image
            src={product.heroImage}
            alt={`${product.name} OEM manufacturing in Gujarat, India`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Category Chip */}
          <div className="absolute top-3 left-3 bg-[#2E4A5C]/85 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full shadow-sm">
            {product.category}
          </div>
          {/* Export / OEM Tag */}
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#2E4A5C] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-[#E3D9C8]/60">
            OEM / Private Label
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-[#2E4A5C] group-hover:text-[#B4835A] transition-colors mb-2">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6B75] line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          {/* Quick Features List */}
          <div className="space-y-1.5 border-t border-[#E3D9C8]/50 pt-3">
            {product.trustBadges.slice(0, 2).map((badge, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs text-[#2E4A5C]/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2FA84F] shrink-0" />
                <span className="truncate">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-5 sm:px-6 pb-5 pt-0">
        <Link
          href={`/products/${product.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs sm:text-sm font-semibold text-[#2E4A5C] bg-[#EDE3D3]/60 group-hover:bg-[#B4835A] group-hover:text-white transition-all duration-300"
        >
          <span>View Specifications</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
