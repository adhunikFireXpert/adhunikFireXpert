
// Example in app/blog/page.js
import Link from 'next/link'

export const metadata = {
  
  title:"Fire Safety Blog | Expert Tips & Industry Insights | Adhunik FireXpert Service",

  description:"Stay informed with Adhunik FireXpert Service’s blog—your go-to resource for fire safety tips, industry updates, and compliance best practices. Protect what matters most!"
}

export default function BlogHome() {
  const blogsCards = [
    
    {
      href: '/blog/adhunik-firexpert-the-legacy-of-adhunik-powertech',
      img: "https://res.cloudinary.com/djablkulv/image/upload/v1758015802/fire_rkopyo.webp",
      alt: "Adhunik FireXpert : The Legacy of Adhunik Powertech",
      title: "Adhunik FireXpert : The Legacy of Adhunik Powertech",
      para: "September 2025 by Adhunik FireXpert Company",
      pub: "Fire Safety Services",
      tag: "Fire Safety, Fire Fighting Company, Delhi NCR"
    },
 

  ];
  
  return (
    <>

      <section>
        <div className="relative flex h-[75vh] md:h-[50vh] w-full">
          <img
            src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747898961/zedex_Blog_banner_p2vgv0.webp"
            className="hidden md:block h-full w-full object-cover object-center"
            alt="Blog Banner"
          />
          <img
            src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747899628/blog_phone_view_rylp3n.webp"
            className="md:hidden h-full w-full object-cover object-center"
            alt="Blog Banner Mobile"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
              <p className="text-sm mt-4 uppercase tracking-wide">Home / Blogs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="bg-gray-50 py-16 px-4 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogsCards.map((item, index) => (
            <Link key={index} href={item.href} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 group">
              <div className="overflow-hidden   md:w-full">

                <img
                  src={item.img}
                  alt={item.alt}
                  className="  object-cover   object-center  transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-3">{item.para}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
                    {item.pub}
                  </span>
                </div>
                <div className="text-sm text-gray-700">
                  <strong className="block mb-1">Tagged under : </strong>
                  <div className="flex flex-wrap gap-2">
                    {item.tag?.split(',').map((tag, i) => (
                      <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">{tag.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>





    </>
  )
}


