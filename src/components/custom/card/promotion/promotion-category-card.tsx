export default function PromotionCategoryCard({className = ""}: {className?:string}) {
    return (
        <div className={`${className} relative`}>
            <div 
                className="lg:block overflow-hidden bg-black w-200 rounded-br-full h-150 px-5 text-5xl font-bold"
                style={{clipPath: "polygon(100% 0, 0 0, 0 100%)"}}
            >
                <p className="text-white ml-5">PROMO</p>
                <p className="text-amber-500">TION</p>
            </div>
            <div
                className="absolute top-140 right-0 overflow-hidden bg-black h-50 w-60"
                style={{clipPath: "polygon(100% 0, 0 100%, 100% 100%)"}}
            />
        </div>
    );
}