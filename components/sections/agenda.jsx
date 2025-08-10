import React from 'react';
import Link from "next/link";

const Agenda = (props) => {
    const agendaItems = [
        { type: 'keynote', title: 'The Key Note Theme' },
        { type: 'speaker', title: 'The Key Note Theme' },
        { type: 'keynote', title: 'The Key Note Theme' },
        { type: 'speaker', title: 'The Key Note Theme' },
        { type: 'keynote', title: 'The Key Note Theme' },
        { type: 'speaker', title: 'The Key Note Theme' },
        { type: 'keynote', title: 'The Key Note Theme' },
        { type: 'speaker', title: 'The Key Note Theme' }
    ];

    return (
        <section className="flex items-center justify-center bg-primary w-full">
            <div data-aos="fade-up" className="py-16 px-6 mx-auto max-w-7xl">
                <h2 className="text-5xl text-white font-bold text-center mb-9">Agenda</h2>
                <div className="mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-y-12 lg:gap-x-40">
                        {agendaItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                {/* Timing */}
                                <div className="flex flex-col items-start">
                                <span className="text-white text-2xl font-bold">
                                    8:00 am
                                </span>
                                    <span className="text-white text-md font-medium">
                                    9:00 am
                                </span>
                                </div>
                                {/* Vertical line indicator */}
                                <div className="w-1 h-16 bg-gray-300 flex-shrink-0"></div>

                                {/* Content */}
                                <div className="flex flex-col space-y-2">
                                    {/* Badge */}
                                    <div className="flex">
                                        {item.type === 'keynote' ? (
                                            <span className="bg-secondary text-white px-3 py-1 text-xs font-medium rounded uppercase tracking-wide">
                                            Key note
                                        </span>
                                        ) : (
                                            <span className="bg-gray-800 text-white px-3 py-1 text-xs font-medium rounded uppercase tracking-wide">
                                            Speaker
                                        </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-gray-400 text-lg font-medium">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-white text-2xl font-bold text-center mt-9">Interested in becoming a speaker? <Link href="/" className="text-secondary">Apply here</Link></p>
            </div>
        </section>
    );
};

export default Agenda;