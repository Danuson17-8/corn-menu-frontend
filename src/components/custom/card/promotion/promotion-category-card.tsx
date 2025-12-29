export default function PromotionCategoryCard({className = ""}: {className?:string}) {
    return (
        <div className={`${className} relative`}>
            <div 
                className="overflow-hidden bg-black w-200 rounded-br-full h-45 md:h-150 px-5 text-5xl font-bold "
                style={{clipPath: "polygon(100% 0, 0 0, 0 100%)"}}
            >
                <p className="text-white m-5">PROMO</p>
                <p className="text-amber-500">TION</p>
            </div>
        </div>
    );
}