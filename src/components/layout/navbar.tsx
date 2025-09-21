"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, Sparkles } from "lucide-react";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-background/90 backdrop-blur-xl border-b border-purple-200/20 shadow-lg shadow-purple-500/10" 
        : "bg-background/70 backdrop-blur-md border-b border-transparent"
    }`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <a 
              href="#hero" 
              className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 animate-pulse" />
                <div className="absolute inset-0 h-5 w-5 sm:h-6 sm:w-6 bg-purple-500/20 rounded-full blur-sm group-hover:bg-purple-500/40 transition-all duration-300"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent hover:from-purple-500 hover:via-pink-400 hover:to-orange-300 transition-all duration-300">
                Anmol
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-foreground/80 hover:text-foreground transition-all duration-300 group rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            
            <div className="ml-3 lg:ml-4 pl-3 lg:pl-4 border-l border-border/40">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-11 w-11 sm:h-12 sm:w-12 p-0 hover:bg-purple-100/50 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
                >
                  <Menu className="h-6 w-6 sm:h-7 sm:w-7 text-foreground hover:text-purple-600 transition-colors duration-300" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[320px] bg-gradient-to-br from-slate-900/98 via-purple-900/95 to-slate-900/98 backdrop-blur-xl border-l border-purple-400/30 shadow-2xl transition-all duration-500 ease-in-out">
                {/* Hidden accessibility title */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Portfolio navigation menu with links to different sections
                </SheetDescription>
                
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-center pb-6 border-b border-purple-300/30">
                    <div className="inline-flex items-center space-x-3 mb-3">
                      <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
                      <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                        Anmol Mishra
                      </span>
                      <Sparkles className="h-5 w-5 text-pink-400 animate-pulse" />
                    </div>
                    <p className="text-white/70 text-sm mb-3">Frontend Developer & Data Analyst</p>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
                  </div>
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative px-5 py-3.5 text-base font-medium text-white/90 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 border border-white/5 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm transform hover:scale-[1.02] active:scale-[0.98]"
                      onClick={() => setIsOpen(false)}
                      style={{ 
                        animationDelay: `${index * 80}ms`,
                        animation: `slideInRight 0.4s ease-out ${index * 80}ms both`
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-110 group-hover:shadow-sm group-hover:shadow-purple-500/50 transition-all duration-300"></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-base">{item.name}</span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/15 group-hover:via-pink-500/10 group-hover:to-orange-500/5 transition-all duration-300"></div>
                      <div className="absolute bottom-0 left-5 right-5 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>
                  ))}
                  
                  {/* Additional Mobile Menu Footer */}
                  <div className="mt-8 pt-6 border-t border-purple-300/20">
                    <div className="text-center">
                      <p className="text-white/50 text-sm mb-4">Connect with me</p>
                      <div className="flex justify-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/30">
                          <span className="text-white text-sm font-bold">A</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-orange-500/30">
                          <span className="text-white text-sm font-bold">M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}