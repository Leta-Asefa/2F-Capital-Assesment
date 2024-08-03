const Logo = ({ src }) => {
    return (
        <div className="flex gap-2 items-center text-2xl font-bitbold">
            <img src={src} className={`${src === "blue_logo2.svg" ? 'w-9' : 'w-14'}`} alt="logo" />
            <h1 className={`${src === "blue_logo2.svg" ? 'text-secondary text-sm' : ''}`}>Book Rent</h1>
        </div>
    );
}

export default Logo;