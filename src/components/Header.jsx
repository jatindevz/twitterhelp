import { RocketIcon } from "lucide-react";
import { useState, useCallback, useMemo } from "react";
import Dummies from "../data/Dammy";
import Skeleton from "./Skeleton";
import Post from "./Post";
import Nav from "./Nav";
const EngagementGenerator = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [randomQuestions, setRandomQuestions] = useState([]);

    // Memoized feature cards data to prevent recreation on every render
    const featureCards = useMemo(() => [
        { icon: '🔍', title: 'Curated Knowledge', text: 'Data-backed content from reliable sources' },
        { icon: '🤖', title: 'AI-Enhanced', text: 'Smart algorithms optimize engagement' },
        { icon: '🚀', title: '1-Click Magic', text: 'Generate and post in seconds' }
    ], []);

    // Optimized question generation using Fisher-Yates shuffle
    const generateRandomQuestions = useCallback(() => {
        const shuffled = [...Dummies];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, 5);
    }, []);

    const handleGenerateContent = useCallback(() => {
        setIsLoading(true);
        setIsContentVisible(true);

        // Generate content first for immediate UI feedback
        setRandomQuestions(generateRandomQuestions());

        // Simulate network request
        setTimeout(() => setIsLoading(false), 1500);
    }, [generateRandomQuestions]);

    return (
        <div className="min-h-screen  bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center  py-12">
            <Nav />
            <div className="text-center animate-fade-in ">
                {/* Header Section */}
                <header className="mb-10">
                    <div className="inline-block bg-violet-900/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <p className="text-violet-300 font-medium text-sm tracking-wide">
                            FOR DEVELOPERS & CONTENT CREATORS
                        </p>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        <span className="text-emerald-400">Rocket-fuel</span> your Twitter
                        <span className=" mt-2"> engagement <br /> with viral</span>
                        <span className="mt-3">
                            <span className="text-rose-400"> programming content</span>
                            <RocketIcon className="w-10 h-10 inline-block ml-3 text-amber-400 -mb-2" />
                        </span>
                    </h1>

                    {/* <TypewriterHeading /> */}

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-8">
                        Generate eye-catching programming facts, expert tips, and engaging
                        questions that make your audience interact and share
                    </p>
                </header>

                {/* Features Grid */}

                <section className="flex  justify-center gap-6 mb-12 max-w-6xl ">
                    {featureCards.map((item) => (
                        <article
                            key={item.id}
                            className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-violet-500 transition-colors duration-300 w-full max-w-xs"
                        >
                            <span
                                className="text-2xl mb-3 block"
                                aria-label={`Icon for ${item.title}`}
                                role="img"
                            >
                                {item.icon}
                            </span>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.text}</p>
                        </article>
                    ))}
                </section>


                {/* Generate Button */}
                <button
                    onClick={handleGenerateContent}
                    className="btn mt-4 bg-violet-900/30 backdrop-blur-sm tracking-wide flex items-center gap-2 group relative text-violet-300 px-8 py-4 rounded-xl text-lg font-bold mx-auto transition-all duration-300 hover:bg-violet-900/50"
                    aria-label="Generate viral content"
                >
                    <span className="relative z-10 flex items-center">
                        <span className="mr-2">✨</span>
                        Create Viral Content
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">
                            &rarr;
                        </span>
                    </span>
                </button>

                {/* Generated Content Section */}
            </div>
            <div className="flex items-center justify-center">

                {isContentVisible && (
                    <section className="flex flex-col gap-3  mt-8 animate-fadeIn w-xl">
                        {randomQuestions.map((question, index) => (
                            <div key={`post-${index}`}>
                                {isLoading ? (
                                    <Skeleton />
                                ) : (
                                    <Post question={question} />
                                )}
                            </div>
                        ))}
                    </section>
                )}
            </div>
        </div>
    );
};

export default EngagementGenerator;