import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = ref => ({
    container: ref,
    waveColor: "#F0F8FF",
    progressColor: 'hsla(200, 100%, 30%, 0.5)',
    cursorColor: "#fff",
    barWidth: 3,
    barHeight: 0.19,
    barRadius: 3,
    responsive: true,
    barMinHeight: 0.0001,
    // progressColor: 'hsla(500, 100%, 30%)'
    // height: 0,
    // If true, normalize by the maximum peak instead of 1.0.
    // normalize: true,
    // Use the PeakCache to improve rendering speed of large waveforms.
    // partialRender: true
});

export default function Waveform({ url }) {
    console.log("getting data from waveform.jsx " + url);
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [playing, setPlay] = useState(false);
    // const [volume, setVolume] = useState(0.5);


    const [sings] = useState([{
            img_src: "./image/play.png",
        },
        {
            img_src: "./image/pause.png",
        }
    ]);

    // create new WaveSurfer instance
    // On component mount and when url changes
    useEffect(() => {
        setPlay(false);

        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);

        wavesurfer.current.load(url);

        // wavesurfer.current.on("ready", function() {
        // https://wavesurfer-js.org/docs/methods.html
        // wavesurfer.current.play();
        // setPlay(true);

        // make sure object stillavailable when file loaded
        //         if (wavesurfer.current) {
        //             wavesurfer.current.setVolume(volume);
        //             setVolume(volume);
        //         }
        //     });

        //     // Removes events, elements and disconnects Web Audio nodes.
        //     // when component unmount
        //     return () => wavesurfer.current.destroy();
    }, [url]);

    const handlePlayPause = () => {
        setPlay(!playing);
        wavesurfer.current.playPause();
    };

    return ( < div >
        <
        center >
        <
        div className = "wavi"
        id = "waveform"
        ref = { waveformRef } > < /div> < /
        center > <
        div className = "controls" >
        <
        center >
        <
        div onClick = { handlePlayPause } > {!playing ? < img className = "img-icon"
            alt = ""
            src = { sings[0].img_src }
            />  : <
            img className = "img-icon"
            src = { sings[1].img_src }
            alt = "" / >
        } <
        /div>  < /
        center > <
        /div>   < /
        div >
    );
}