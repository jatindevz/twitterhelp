const Skeleton = () => (
    <div className="animate-pulse">
        <div className="bg-white/15 rounded-xl p-5 h-40">
            <div className="space-y-3">
                <div className="h-4 bg-gray-300/20 rounded-lg w-3/5"></div>
                <div className="h-4 bg-gray-300/20 rounded-lg w-4/5"></div>
                <div className="h-4 bg-gray-300/20 rounded-lg"></div>
                <div className="h-4 bg-gray-300/20 rounded-lg w-2/5"></div>
                <div className="h-4 bg-gray-300/20 rounded-lg w-3/5"></div>
            </div>
        </div>
    </div>
);

export default Skeleton;