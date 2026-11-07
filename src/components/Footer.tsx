import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const exploreLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/posts" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const followLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: FaInstagram,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      icon: FaXTwitter,
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: FaYoutube,
    },
  ];
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-block">
              <h2 className="font-display text-4xl font-semibold tracking-tight text-primary">
                Artik<span className="text-foreground">.</span>
              </h2>
            </Link>

            <p className="mt-4 text-sm leading-7 text-muted">
              A space where creativity meets storytelling. Discover inspiring
              articles, share your thoughts, and explore perspectives from
              voices around the world.
            </p>

            <p className="text-xs text-muted mt-4">
              © 2026 Artik. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              Explore
            </h3>

            <div className="flex flex-col items-start gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-300 hover:translate-x-1 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              Follow Us
            </h3>

            <div className="flex flex-col items-start gap-3">
              {followLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-primary"
                  >
                    <Icon className="text-xs transition-transform duration-300 group-hover:scale-110" />
                    {social.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
