import React from 'react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';

const Nav = () => {
    // Social links data
    const socialLinks = [
        {
            href: "https://github.com/jatindevz/twitterhelp",
            label: "GitHub profile",
            icon: <FaGithub size={20} />,
            color: "hover:text-violet-400"
        },
        {
            href: "https://x.com/jatinnvw",
            label: "X (Twitter) profile",
            icon: <FaXTwitter size={20} />,
            color: "hover:text-sky-400"
        }
    ];

    return (
        <nav
            className="fixed top-5 right-5 z-50"
            aria-label="Social media navigation"
        >
            <ul className="flex gap-3 p-1.5 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg">
                {socialLinks.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-gray-300 transition-colors duration-300 ${link.color} flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10`}
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;