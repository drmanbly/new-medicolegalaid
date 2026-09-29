"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Search, Link as LinkIcon, ChevronDown, ChevronUp } from "lucide-react";

type Tip = {
  title: string;
  slug: string;
  content: string;
};

export function TipsClient({ tips }: { tips: Tip[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTip, setExpandedTip] = useState<string | null>(null);

  // Handle anchor linking on load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (tips.some(t => t.slug === hash)) {
        setExpandedTip(hash);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [tips]);

  const filteredTips = useMemo(() => {
    if (!searchQuery) return tips;
    const lowerQuery = searchQuery.toLowerCase();
    return tips.filter(
      (tip) =>
        tip.title.toLowerCase().includes(lowerQuery) ||
        tip.content.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery, tips]);

  const copyLink = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    const url = `${window.location.origin}/tips#${slug}`;
    navigator.clipboard.writeText(url);
    // Simple visual feedback could be added here
  };

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="py-8 px-4 sm:px-8 mb-4 border-b border-primary/10 bg-background">
        <div className="max-w-3xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search all 48 tips by keyword, topic..."
            className="w-full pl-12 pr-4 py-4 rounded-sm border border-primary/20 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-base shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24 space-y-4">
        {filteredTips.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-primary/20 rounded-sm">
            <p className="text-muted-foreground text-lg">No tips found matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-primary font-semibold hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          filteredTips.map((tip, index) => {
            const isExpanded = expandedTip === tip.slug;
            return (
              <div 
                id={tip.slug} 
                key={tip.slug} 
                className="scroll-mt-[160px] border border-primary/15 rounded-sm bg-card shadow-sm hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => setExpandedTip(isExpanded ? null : tip.slug)}
                  className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-primary/[0.02] transition-colors"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                    {tips.findIndex(t => t.slug === tip.slug) + 1}
                  </span>
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="font-serif font-semibold text-[20px] text-foreground leading-snug">
                      {tip.title}
                    </h3>
                    {!isExpanded && (
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                        {tip.content.substring(0, 150)}...
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 mt-2">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-primary/10">
                    <div className="text-[16px] text-[#453F32] whitespace-pre-line leading-[1.75] ml-[56px]">
                      {tip.content}
                    </div>
                    <div className="ml-[56px] mt-6 pt-4 border-t border-border flex items-center gap-4">
                      <button
                        onClick={(e) => copyLink(e, tip.slug)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-accent transition-colors"
                        title="Copy direct link to this tip"
                      >
                        <LinkIcon className="h-4 w-4" />
                        Copy Link
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
