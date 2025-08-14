import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="footer sm:footer-horizontal p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">AI Code Editor</a>
          <a className="link link-hover">Real-time Collaboration</a>
          <a className="link link-hover">One-click Deployment</a>
          <a className="link link-hover">Cloud Hosting</a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blog</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">GitHub</a>
          <a className="link link-hover">LinkedIn</a>
          <a className="link link-hover">Discord</a>
        </nav>

        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">API</a>
          <a className="link link-hover">Pricing</a>
        </nav>

        <nav>
          <h6 className="footer-title">Apps</h6>
          <a className="link link-hover">Web</a>
          <a className="link link-hover">Mac</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">Mobile</a>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        <p>
          &copy; CodeSphere@{currentYear} — All rights reserved.  
          {/* Tags: AI Coding, Browser IDE, Developer Tools, Real-time Collaboration, Cloud Deployment */}
        </p>
      </div>
    </footer>
  );
}
