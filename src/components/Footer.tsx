const Footer = () => {
    return (
        <div className="bg-back  text-white flex flex-col gap-2 items-center">
            <p className="font-normal text-xl">&copy; {new Date().getFullYear()} DBIT. All rights reserved.</p>
        </div>
    )
}

export default Footer