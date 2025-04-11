import React, { useEffect, useState } from 'react'
import { Link, Link as ScrollLink } from 'react-scroll';

function HistoryCulture() {

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isSticky, setIsSticky] = useState(false);
    const [selectLink , setSelectLink] = useState("tours");


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 710) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const images = [
        {
            id: 1,
            picture: "/versailles-sunset-shutterstock-494x280.jpg",
            title: "A Historical and Cultural Escape to Paris",
            info: "6 Days | Premium | From $3,999 pp",
            description: "Explore pretty Paris in all its glory, take yourself back in time to learn about the rich history and artistic backround of Paris that has sculpted this city in to what it is today. One of the most ...",
            category: "History & Culture"
        }, {
            id: 2,
            picture: "/Multigen-Family-Cover-photo-2-494x280.webp",
            title: "A Journey Through History, Art, and Nature in Charming France",
            info: "9 Days | Premium | Price On Request",
            description: "Travel through France on a picturesque journey where Parisian elegance meets the attraction of the Loire Valley. Discover renowned Paris sights, walk through Monet's vivid gardens, and soar above ...",
            category: "Group Travel, History & Culture"
        }, {
            id: 3,
            picture: "/military-cemetery-omaha-beach-normandy-pixabay-494x280.jpg",
            title: "A Historic Trip to Normandy",
            info: "4 days | Premium | From $2,199 pp",
            description: "Digest Normandy for exactly what it is, as you dive in to the stories of one of the most historic regions in France. Explore the various beaches used in World war II, take private guided tours of the ...",
            category: "History & Culture"
        }, {
            id: 4,
            picture: "/colmar-noel-pixabay-france-494x280.png",
            title: "Alsace's Cultural and Culinary Journey",
            info: "4 Days | Excellence | From $5,599 pp",
            description: "Experience the essence of Alsace in 4 Days- Begin your journey with a private visit to Haut-Koenigsbourg castle, delving into its architectural marvels and historical significance. This visit will ...",
            category: "History & Culture, Wine & Food"
        }, {
            id: 5,
            picture: "/nimes-bullfighter-arena-travel-shutterstock-494x280.jpg",
            title: "Art, Culture and History trip to Provence",
            info: "10 Days | Premium | From $6,299 pp",
            description: "Discover culturally rich Provence on this 10 day tour. Learn how the Romans left their mark on this corner of France and follow in Van Gogh's footsteps. See the Calanques National Park’s ...",
            category: "History & Culture"
        }, {
            id: 6,
            picture: "/monaco-4564079_1920-1-494x280.webp",
            title: "Cultural Discovery of Monaco",
            info: "6 Days | Excellence | from $14,699 pp",
            description: "Spend a week discovering the rich culture of Monaco through history, art, and cuisine. The small city-state on the French Riviera is much more than meets the eye, so take the time to experience the ...",
            category: "History & Culture"
        }, {
            id: 7,
            picture: "/Place-Massena-nice-france-shutterstock-494x280.jpg",
            title: "Art, Culture and History trip to the French Riviera",
            info: "5 Days | Luxury | From $4,999 pp",
            description: "This tour brings together unforgettable experiences, including a private and exclusive visit to 2 of the most emblematic modern houses in France. Visitors are charmed by the idyllic scene of small ...",
            category: "History & Culture"
        }, {
            id: 8,
            picture: "/vineyard-couple-romance-wine-shutterstock-494x280.jpg",
            title: "A Perfect Mixture Between Gastronomic and Cultural Discoveries in Champagne, Burgundy, and Lyon",
            info: "10 Days | Premium | From $6,399 pp",
            description: "Travel from Champagne, through Burgundy, and finally to Lyon where you will enjoy a perfect balance of gastronomic and cultural experiences. In Burgundy, you'll enjoy a fabulous full day amongst the ...",
            category: "History & Culture, Wine & Food"
        }, {
            id: 9,
            picture: "/Honfleur-normandy-shutterstock-494x280.jpg",
            title: "Highlights, History, and Culture of Paris, Normandy, and Loire Valley",
            info: "12 days | Luxury| From $12,699 pp",
            description: "This trip offers the perfect blend of Paris and the Normandy region. You'll see the highlights of the City of Light including a full-day private guided tour of the city with the Louvre Museum, take a ...",
            category: "History & Culture, Wine & Food"
        }

    ]
    const experiences = [
        {
            image: "/Paris-Montmarte-painting-paintor-pixabay-jpg.webp",
            content: "Montmartre Painting class",
            subContent: "Experience and enhance your painting skills in this unique painting workshop with the renowned French artist Edwige. During the course, you will have the opportunity to refine and improve your artistic skills. The art class is offered to adults and children of all levels: novice, intermediate, and expert. Just bring your creativity and curiosity and take advantage of this memorable experience."
        }, {
            image: "/louvre-paris-edited.shutterstock-1.jpg",
            content: "Private Tour of the Louvre Museum 'The Highlights' with a licensed guide",
            subContent: "As one of the largest museums in the world, the Louvre has over 35,000 pieces on display from prehistory to the 19th century, spread across more than 650,000 square feet of gallery space. Explore the museum’s huge collection and its greatest works of art, with a licensed guide.The museum’s collections are split into eight different departments: Egyptian antiquities, Greek, Etruscan & Roman antiquities, Near Eastern antiquities, Islamic art, paintings, sculptures, decorative arts, and prints and drawings. Spend time discovering these collections with your guide, who will show you some of the museum’s most famous works and tell you about the stories that lie behind them. Marvel at the Mona Lisa, painted by Leonardo da Vinci in 1506, the Venus de Milo, a celebrated Greek sculpture dating from 100 BC depicting the goddess Aphrodite, or the giant 33-foot-long painting of the Coronation of Napoleon, painted in 1807 by Jacques-Louis David to commemorate the crowning of Napoleon Bonaparte in the Cathedral of Notre-Dame."
        }, {
            image: "/Omaha-Beach_D-Day-Beaches_Pixabay.jpg",
            content: "Full-Day Private Driving Tour of the D-Day US Sector",
            subContent: "Your guide will take you back in time to the different emblematic places of Operation Overlord. Explore the D-Day landing beaches and gain insight into World War II history. Learn the names of the men and women who made the ultimate sacrifice.Your first stop will be the American Cemetery at Colleville-Sur-Mer, located on the top of the cliff overlooking the famous Omaha Beach. The cemetery is one of the largest American World War II cemeteries constructed on foreign soil. Next is Omaha Beach, which is sadly known for being the most devastating but glorious moment of the Normandy invasion, marking the beginning of the end of World War II. You will also get to see the Pointe du Hoc, an ominous piece of land jutting into the English Channel. It provided an elevated vantage point from which large German guns with a range of 15 miles (25 kilometers) could deliver fire upon both Omaha Beach and Utah Beach. The neutralization of these guns by the Allied forces was the key to victory.            Visit Sainte-Mère-Église, one of the first French villages to be liberated. It is famous for a paratrooper who remained attached to the bell tower of the church. Close to the church stands the Airborne Museum. There, you will learn more about the role the paratroopers played in Operation Overlord. The final stop will be Utah Beach, the westernmost beach in the combat zone, where 23,200 American soldiers landed on D-Day."
        }, {
            image: "/van-gogh-carrieres-lumieres-le-baux-provence-jameswrodriguez.jpg",
            content: "Van Gogh in Provence",
            subContent: "Explore the Roman heritage of Arles starting with the amphitheater and theater. There are several 19th-century sites immortalized by Vincent Van Gogh during his stay here between 1888 and 1890. Fans will recognize the yellow house, Cafe la Nuit, and the Hôtel Dieu’s garden.Stop at the Val d’Enfer lookout for a panoramic view over the small village of Les Baux-de-Provence, officially recognized as one of the most beautiful villages in France. Note that this village can only be visited on foot. Admire its carefully restored houses, beautiful Renaissance façades, and several magnificent private mansions that now serve as art galleries and museums.You will make a stop at the Saint-Paul de Mausole Monastery in Saint Rémy de Provence. This is the mental institution where Van Gogh was interned and where he created some of his most famous works. Visit Van Gogh’s recreated bedroom where he stayed from 1889 to 1890."
        }
    ]

    const getShortContent = (subContent) => {
        const contentLimit = 250; // Character limit for content preview
        return subContent.length > contentLimit ? `${subContent.substring(0, contentLimit)}...` : subContent;
    };
    return (
        <main>
            <section
                style={{
                    backgroundImage: 'url("/painting-france-paris-artist.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat'
                }}
                className="relative h-[680px] flex flex-col items-center justify-start  text-center">
                <div className="absolute opacity   bottom-0 left-0 w-full h-[70%] bg-gradient-hero"></div>
                <div className='flex flex-col items-center justify-start min-h-screen mt-[235px]'>

                    <h1 className='text-5xl font-serif text-center text-[rgba(255,255,255,0.9)] relative z-10 text-shadow'>History & Culture</h1>
                    <h3 className='text-2xl md:text-2xl text-center text-[rgba(255,255,255,0.8)] mb-4 max-w-5xl mx-auto leading-relaxed relative z-10'> Browse our history and culture tours for inspiration or contact us straight away for a tailor-made itinerary by a local travel designer.
                    </h3>
                    {/* <!-- callout button --> */}
                    <div className=' p-3 w-full max-w-xs relative z-10'>
                        <a href="" className='inline-block bg-[#e8dcba] text-[#1b3154] py-2 px-12 rounded-full  text-xl transition-colors hover:text-white hover:bg-blue-900 duration-300 cursor-pointer'
                        >
                            Customize My Trip
                        </a>
                    </div>
                </div>
            </section>
            <section className="bg-[#1F3653] pt-[30px] w-full z-50 pb-16">
                <div className={`sticky top-[70px] z-50 ${isSticky ? "": "max-w-[1200px] w-full mx-auto" } `} >
                    <div className='w-full bg-white'>
                        <nav className='flex justify-center gap-10 py-4 text-[#044f70] shadow-md'>
                            <Link onClick={() => setSelectLink("tours")} to="tours" smooth={true} duraction={500} offset={-80} className={`${selectLink === "tours" && isSticky ? "underline" : ""} cursor-pointer hover:underline`}>
                                TOURS
                            </Link>
                            <Link onClick={() => setSelectLink("about")} to="about" smooth={true} duraction={500} offset={-80} className={`${selectLink === "about" ? "underline" : ""} cursor-pointer hover:underline`}>
                                ABOUT
                            </Link>
                            <Link onClick={() => setSelectLink("highlights")} to="highlights" smooth={true} duraction={500} offset={-80} className={`${selectLink === "highlights" ? "underline" : ""} cursor-pointer hover:underline`}>
                                HIGHLIGHTS
                            </Link>
                            <Link onClick={() => setSelectLink("articles")} to="articles" smooth={true} duraction={500} offset={-80} className={`${selectLink === "articles" ? "underline" : ""} cursor-pointer hover:underline`}>
                                RELATED ARTICLES
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className='max-w-[1240px] px-[20px] mx-auto'>
                    <div id='tours' className='pt-[56px]'>
                        <h2 className='flex justify-center text-3xl truncate text-[#ffffff] mb-8 font-bold'>Our Favorite History & Culture Tours</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                            {images?.map((image, index) => (
                                <div key={image.id} className=" bg-white rounded-lg">
                                    {/* Link rasmni o'rab, bosilganda tafsilotlar sahifasiga o'tadi */}
                                    <Link to={`/details/${image.id}`} className="w-full h-full">
                                        <img alt={`travel-${image.id}`} src={image.picture} className="object-fill h-64 rounded-lg" />
                                    </Link>
                                    <div className='p-6'>
                                        <h3 className='text-center  font-bold text-xl'>{image.title}</h3>
                                        <div className='text-start font-bold text-lg mt-4'>{image.info}</div>
                                        <p className='text-lg'>{image.description}</p>
                                        <div className="mt-2 image-category-title">{image.category}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id='about' className='text-white pt-[56px]'>
                        <h2 className='flex justify-center text-3xl truncate text-[#ffffff] mb-6 mt-6 font-bold'>Our History & Culture Tours in Depth</h2>
                        <h3 className='justify-between flex text-2xl mb-2'>With French Side Travel, every detail is meticulously crafted to create unforgettable adventures.</h3>
                        <div className='justify-between flex gap-20'>
                            <div className='text-xl space-y-[20px] w-[58%]'>
                                <p>The adopted home of Leonardo da Vinci was at the epicenter of the Renaissance and the Enlightenment. In the 19th and 20th centuries, it was a magnet for artists including Pablo Picasso and Vincent Van Gogh. See their masterpieces in France’s world-class museums. The Louvre and Musée d’Orsay are the most prominent, but there are countless lesser-known jewels. For millennia France has played a pivotal role in European history. Greek colonists, Roman occupiers, William the Conqueror, the Dukes of Burgundy, the French Kings, and Napoleon left behind imposing castles, fortresses, and monuments. The Avignon Popes and Cluny and Cistercian Orders made it the religious heart capital of Christendom leaving behind soaring cathedrals and breathtaking architecture. Joan of Arc’s story is one of the most fascinating in world history. Were that not enough, France was a major prize in World War I and II. The D-Day beaches and Sommes and Verdun battlefields are humbling, somber memorials of the tragedy of war.</p>
                                <div>
                                    <img src="/dday-beach-normandy-atoutfrance-frank-charel-2-1200x680.jpg" alt="" />
                                </div>
                                <p>In addition to its rich artistic heritage, France offers an unparalleled journey through history and culture, making it a haven for enthusiasts eager to explore the depths of human civilization. Beyond the luminous canvases of da Vinci and the revolutionary strokes of Picasso, France’s historical tapestry is woven with threads from diverse epochs.</p>
                                <p>The Gothic marvel of Notre-Dame Cathedral in Paris stands as a testament to medieval craftsmanship, while the Château de Chambord echoes the grandeur of the Renaissance. In the Loire Valley, the Châteaux de la Loire presents a collection of opulent residences, showcasing the elegance and opulence of the French aristocracy.</p>
                                <p>&nbsp;</p>
                            </div>
                            <div className='w-[42%] text-[#333333] space-y-12 text-xl '>
                                <div className='bg-[#ffffff] p-6 rounded-lg'>
                                    <h4 className='font-semibold text-2xl'>France: a living museum of human history</h4>
                                    <div className='space-y-[20px]'>
                                        <p>Venturing into the 20th century, the scars of war are visible in places like the Normandy beaches, where the D-Day landings occurred, and the poignant memorials at Somme and Verdun, commemorating the sacrifices of World War I. The iconic Mont Valérien in Paris, a site of wartime executions, stands as a solemn reminder of the darker chapters in French history.</p>
                                        <p>France’s intricate past is not confined to its mainland; its overseas territories also contribute to a nuanced narrative. Visit the Palace of the Governors in Martinique or the Maison Bonaparte in Corsica to delve into the colonial legacy that has shaped French identity.</p>
                                        <div className='mb-4'>
                                            <img src="/20200203-soldiers-omaha-beach-ww2-anniversary-shutterstock-1200x680.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-[#333333] bg-[#fff] p-6 pt-8 pb-8 rounded-lg text-2xl image-category-titles'>
                                    In essence, France is not just a canvas for artistic brilliance; it is a living museum of human history, where every cobblestone, every fortress, and every cathedral narrates a captivating story waiting to be discovered by history and culture enthusiasts alike.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='highlights' className="text-white pt-[56px]">
                        <h2 className='flex justify-center text-3xl truncate text-[#ffffff] mb-6 mt-6 font-bold'>Exclusive Experiences</h2>
                        {experiences.map((experience, index) => {
                            const shortContent = getShortContent(experience.subContent);
                            const fullContent = experience.subContent;
                            return (
                                <div key={index} className="flex gap-20 mb-6">
                                    <div className="text-xl w-[35%]">
                                        <div className="mb-10 ">
                                            <img src={experience.image} alt={experience.content} className="w-full rounded-lg " />
                                        </div>
                                    </div>
                                    <div className="w-[65%] text-[#ffffff] text-xl mb-10">
                                        <h4 className="font-semibold text-2xl">{experience.content}</h4>

                                        <p>{expandedIndex === index ? fullContent : shortContent}</p>

                                        <div className="mt-4">
                                            <button
                                                onClick={() =>
                                                    setExpandedIndex(expandedIndex === index ? null : index)
                                                }
                                                className="text-white"
                                            >
                                                {expandedIndex === index ? "Show Less" : "Show More"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div id='articles' className='pt-[56px]'>
                        <div>
                            <h2 className='flex justify-center text-3xl truncate text-[#ffffff] mb-8 font-bold'>Related Articles</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                                {images?.map((image, index) => (
                                    <div key={image.id} className=" bg-white rounded-lg">
                                        {/* Link rasmni o'rab, bosilganda tafsilotlar sahifasiga o'tadi */}
                                        <Link to={`/details/${image.id}`} className="w-full h-full">
                                            <img alt={`travel-${image.id}`} src={image.picture} className="object-fill h-64 rounded-lg" />
                                        </Link>
                                        <div className='p-6'>
                                            <h3 className='text-center  font-bold text-xl'>{image.title}</h3>
                                            <p className='text-lg'>{image.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main >
    )
}

export default HistoryCulture