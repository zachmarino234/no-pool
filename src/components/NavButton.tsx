const NavButton = ({ text = "Text", size = "normal" }) => {
    const textSize = size === 'small' ? 'text-2xl' : 'text-3xl';
    
    return (
        <button className='relative inline-block group'>
            {/* Container to maintain size - should match visible text size */}
            <span className={`invisible font-bold ${textSize} px-2`}>{text}</span>
            
            {/* Dark blue shadow text (only visible on hover) */}
            <span 
                className={`absolute inset-0 font-bold ${textSize} px-2 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center`}
                style={{ color: '#013FFD', fontFamily: 'aptly, sans-serif' }}
            >
                {text}
            </span>
            
            {/* Light blue text that "lifts" on hover */}
            <span 
                className={`absolute inset-0 font-bold ${textSize} px-2 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 flex items-center`}
                style={{ 
                    color: '#0396FF', 
                    fontFamily: 'aptly, sans-serif',
                    WebkitTextStrokeWidth: '2px',
                    WebkitTextStrokeColor: '#FBF7F4',
                    paintOrder: 'stroke fill'
                }}
            >
                {text}
            </span>
        </button>
    );
};

export default NavButton;