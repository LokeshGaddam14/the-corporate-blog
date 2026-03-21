import { Metadata } from 'next';
import { getPublishedPosts, getCategories, getPopularPosts } from '@/lib/api';
import PostCard from '@/components/blog/PostCard';
import Link from 'next/link';

export const revalidate = 900; // 15 min ISR

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'Expert business insights, strategy, and industry analysis from The Corporate Blog.',
  alternates: { canonical: '/blog' },
};

export default async function BlogHomePage() {
  const [{ posts }, { categories }, { posts: popular }] = await Promise.all([
    getPublishedPosts({ limit: 9 }).catch(() => ({ posts: [], pagination: { page: 1, limit: 9, total: 0, pages: 0 } })),
    getCategories().catch(() => ({ categories: [] })),
    getPopularPosts().catch(() => ({ posts: [] })),
  ]);

  const [featured, ...rest] = posts;

  return (
    <div>
      {/* Hero / Featured Article */}
      {featured && (
        <section style={{ padding: '3rem 0 4rem', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              <div style={{ animation: 'var(--animate-fade-up)' }}>
                <PostCard post={featured} variant="featured" />
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="container-wide" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
          {/* Main content */}
          <div>
            {/* Category filters */}
            {categories.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/blog" style={{ padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-sm)', fontWeight: 600, backgroundColor: 'var(--color-accent)', color: 'white' }}>All</Link>
                {categories.slice(0, 6).map(cat => (
                  <Link key={cat.id} href={`/blog/category/${cat.slug}`}
                    style={{ padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-sm)', fontWeight: 500, border: '1px solid var(--color-border)', color: 'var(--color-ink-600)', backgroundColor: 'var(--color-surface)', transition: 'all 0.15s ease' }}>
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Latest articles grid */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                Latest Articles
                <span style={{ width: '40px', height: '3px', backgroundColor: 'var(--color-accent)', display: 'inline-block', borderRadius: '2px' }} />
              </h2>
            </div>

            {rest.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {rest.map((post, i) => (
                  <div key={post.id} style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 0.05}s` }}>
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--color-muted)', border: '2px dashed var(--color-border)', borderRadius: 'var(--radius-xl)' }}>
                <p style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-display)' }}>No articles published yet.</p>
                <p style={{ fontSize: 'var(--text-sm)', marginTop: '0.5rem' }}>Check back soon, or <Link href="/admin" style={{ color: 'var(--color-accent)' }}>write the first one</Link>.</p>
              </div>
            )}

            {/* View more */}
            {posts.length >= 9 && (
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link href="/blog?page=2" style={{ padding: '0.75rem 2rem', borderRadius: 'var(--radius-full)', border: '2px solid var(--color-ink-950)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-ink-950)', transition: 'all 0.15s ease', display: 'inline-block' }}>
                  Load more articles
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
