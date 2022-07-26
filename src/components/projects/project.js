import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Project(props) {
    const features = props.features;
    const structure = props.structure;

    return (
        <motion.div className="py-40 px-5 max-w-[1000px] mx-auto space-y-10"
            initial= {{ opacity: 0, y: '5%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        >
            <div className="space-y-3">
                {/* Heading */}
                <div className="flex justify-center align-middle"> {/* Container used to allow centering as display: inline-block prevents this */}
                    <div className="space-y-3 mb-16 text-center inline-block">
                        <h2 className="inline-block font-semibold text-center">{props.heading}</h2>
                        <div className={`h-1 w-4/5 mx-auto bg-primary`}></div>
                    </div>
                </div>

                <Link className="hover:underline decoration-secondary-text-hover hover:text-secondary-text-hover" to="/projects">← Go Back</Link>

                {/* Links */}
                <div className="flex flex-row justify-between">
                    <a href={props.projectLink}>View Project</a>
                    <a href={props.repoLink}>View Code</a>
                </div>
            </div>
            
            <div className="space-y-10">
                <p>{props.overview}</p>
     
                <img className="mx-auto md:px-10 rounded-sm"  src={props.projectImage} alt="Image of project"/>

                <div className="py-10 space-y-10 md:space-y-0 md:flex md:space-x-20 border-y-2 border-primary">
                    <div className="space-y-10">
                        <h3 className="font-semibold">Features</h3>
                        <ul className="space-y-10">
                            {features.map((features) =>
                                <li className="list-disc marker:text-primary ml-4 text-2xl">{features}</li>
                            )}
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <h3 className="font-semibold">Structure</h3>
                        <ul className="space-y-10">
                            {structure.map((structure) =>
                                <li className="list-disc marker:text-primary ml-4 text-2xl">{structure}</li>
                            )}
                        </ul>
                    </div>
                </div>

                <section className="space-y-10">
                    <div className="space-y-3">
                        <h3 className="underline decoration-primary font-semibold">Target</h3>
                        <p>{props.target}</p>
                    </div>

                    <div className="image-container"> {/* Prevents image animation overflow */}
                        <img className="mx-auto md:px-10 rounded-sm" src={props.targetImage} alt="Image of project" />
                    </div>
                </section>

                <section className="space-y-10">
                    <div className="space-y-3">
                        <h3 className="underline decoration-primary font-semibold">Issues</h3>
                        <p>{props.issues}</p>
                    </div>

                    <div className="image-container">
                        <img className="mx-auto md:px-10 rounded-sm" src={props.issuesImage} alt="Image of project" />
                    </div>
                </section>

                <section className="space-y-10">
                    <div className="space-y-3">
                        <h3 className="underline decoration-primary font-semibold">Resolutions</h3>
                        <p>{props.resolutions}</p>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}