export default function PromotionCategoryCard({className = ""}: {className?:string}) {
    return (
        <div className={`${className} relative`}>
            <div 
                className="overflow-hidden bg-black w-200 rounded-br-full h-150 pt-10 px-5 text-5xl font-bold"
                style={{clipPath: "polygon(100% 0, 0 0, 0 100%)"}}
            >
                <span className="text-white ml-5">PROMO</span><span className="text-amber-500">TION</span>
            </div>
            <div
                className="absolute top-120 right-0 overflow-hidden bg-black h-50 w-60"
                style={{clipPath: "polygon(100% 0, 0 100%, 100% 100%)"}}
            />
        </div>
    );
}