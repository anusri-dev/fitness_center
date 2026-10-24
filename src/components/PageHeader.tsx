interface Props {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}

/**
 * Premium page header with gradient overlay, parallax-feel image,
 * and decorative animated blobs.
 */
export default function PageHeader({ title, subtitle, image, alt }: Props) {
  return (
    <section className="relative flex min-h-[52vh] items-center justify-center overflow-hidden py-28 sm:py-36">
      {/* Background image */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/70 to-brand-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/60 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute -left-20 top-1/4 h-72 w-72 animate-float rounded-full bg-brand-500/15 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-80 w-80 animate-float rounded-full bg-forest-600/15 blur-3xl [animation-delay:2s]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <div className="mb-6 flex justify-center">
          <span className="h-1 w-12 rounded-full bg-gradient-to-r from-brand-400 to-forest-500" />
        </div>
        <h1 className="animate-fade-up text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-5 animate-fade-up text-lg text-brand-100 [animation-delay:0.15s] opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            {subtitle}
          </p>
        )}
        <div className="mt-6 flex justify-center">
          <span className="h-1 w-12 rounded-full bg-gradient-to-r from-forest-500 to-brand-400" />
        </div>
      </div>
    </section>
  );
}
