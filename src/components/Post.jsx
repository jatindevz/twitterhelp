import { useState, useCallback,useMemo } from "react";
import { FaRegBookmark, FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { HiOutlineUpload } from "react-icons/hi";
import { RiRepeatLine } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

// Memoized month names to avoid recreation
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Post = ({ question }) => {
    const [isLiked, setIsLiked] = useState(false);
    const { randomColor, randomcat } = useMemo(() => {
        const colors = [
            '/Meyrin.jpeg',
            '/cat2.jpeg',
            '/cat3.jpeg',
            '/ciel-kitty.jpeg',
            '/angel-cat.jpeg'
        ];
        const catUsernames = ["Meowz", "Pawzi", "Mitti", "Furlo", "Whsky"];

        return {
            randomColor: colors[Math.floor(Math.random() * colors.length)],
            randomcat: catUsernames[Math.floor(Math.random() * catUsernames.length)]
        };
    }, []);


    // Get current date only once per component instance
    const [currentDate] = useState(() => {
        const date = new Date();
        return {
            day: date.getDate(),
            month: MONTHS[date.getMonth()]
        };
    });

    const handleShare = useCallback(() => {
        const tweetText = encodeURIComponent(question);
        window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, "_blank");
    }, [question]);

    const toggleLike = useCallback(() => setIsLiked(prev => !prev), []);

    // Social interaction items
    const interactions = [
        { icon: <FaRegComment className="size-4" />, count: 99, label: "Comments" },
        { icon: <RiRepeatLine className="size-4" />, count: 20, label: "Retweets" },
        {
            icon: isLiked ? <FaHeart className="size-4 text-pink-500" /> : <FaRegHeart className="size-4" />,
            count: isLiked ? "7.0k" : "6.9k",
            action: toggleLike,
            color: "pink-500"
        },
        { icon: <TbBrandGoogleAnalytics className="size-4" />, count: "69k", label: "Analytics" },
    ];

    return (
        <article className="bg-black p-3 rounded   transition-colors border border-white/20">
            <div className="flex gap-3 items-start">
                {/* User Avatar */}
                <div className="flex-shrink-0">
                    <img
                        className="rounded-full size-10 object-cover"
                        src={randomColor}
                        alt={randomColor}
                        loading="lazy"
                    />
                </div>

                {/* Post Content */}
                <div className="flex-1">
                    {/* Post Header */}
                    <header className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-1 text-sm">
                            <div className="font-semibold hover:underline text-white">{randomcat}</div>
                            <div className="text-gray-400">@{randomcat} ·</div>
                            <time className="text-gray-400 hover:underline">
                                {currentDate.month} {currentDate.day}
                            </time>
                        </div>

                        <button
                            onClick={handleShare}
                            className="flex items-center gap-1 text-sm font-semibold border rounded-full px-2 py-0.5 hover:bg-white/20 transition-colors"
                            aria-label="Share post on Twitter"
                        >
                            <FiShare />
                            Post
                        </button>
                    </header>

                    {/* Question Text */}
                    <p className="mb-3 text-white text-sm">{question}</p>

                    {/* Interaction Bar */}
                    <div className="flex justify-between text-sm text-white ">
                        {interactions.map((item, index) => (
                            <button
                                key={`interaction-${index}`}
                                onClick={item.action}
                                className={`flex items-center gap-1 ${item.color ? `text-${item.color}` : 'hover:text-gray-400'}`}
                                aria-label={item.label || ""}
                            >
                                <span className="p-1 rounded-full hover:bg-white/10">
                                    {item.icon}
                                </span>
                                <span>{item.count}</span>
                            </button>
                        ))}

                        {/* Additional Actions */}
                        <div className="flex gap-2">
                            <button className="p-1 rounded-full hover:bg-white/10" aria-label="Bookmark">
                                <FaRegBookmark className="size-4" />
                            </button>
                            <button className="p-1 rounded-full hover:bg-white/10" aria-label="Share">
                                <HiOutlineUpload className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Post;