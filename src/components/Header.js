//creat a components by React, name: Header, props: {title: string}

function Header({title}) {
    return (
        <div className=''>
            <header className='px-5 py-10 text-center'>
                <h1 className='text-5xl'>{title}</h1>
                <div className="text-3xl">I am React & Tailwindcss</div>
            </header>
        </div>
    );
}

export default Header;