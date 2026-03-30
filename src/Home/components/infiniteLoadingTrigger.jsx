


export default function InfiniteLoadingTrigger({callback}){
    const [isLoading,setIsLoading] = useState(false);
    const triggerRef = useRef(null);   
    
    useEffect(function(){
        const observer = new IntersectionObserver(function(entries){
            if (entries[0].isIntersecting && !isLoading){ 
                setIsLoading(init=>true);
                callback();
            }   
        },{threshold:0.5})
        if (triggerRef.current){
            observer.observe(triggerRef.current);
        }
        return function(){
            if (triggerRef.current){
                observer.unobserve(triggerRef.current);
            }   
        }
    },[callback,isLoading])

    return <div ref={triggerRef} className="w-full h-12 flex items-center justify-center">
                <p className="text-sm text-slate-500 font-monetizer">Loading...</p>
            </div>
}
