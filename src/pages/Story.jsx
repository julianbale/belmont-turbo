import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import { img } from '../utils'

export default function Story() {
  const [lightbox, setLightbox] = useState(null)

  const Img = ({ path, children }) => (
    <a
      href="#"
      className="img-link"
      onClick={(e) => { e.preventDefault(); setLightbox({ src: img(path), alt: String(children) }) }}
    >
      {children}
    </a>
  )

  return (
    <>
      <h2 className="page-title">Story</h2>
      <div className="body-text">
        <p>
          My wife's first car was a Vauxhall Belmont 1.3 Merit. It had only 4 gears and
          would pull 115 mph after a few minutes. At the time I had a{' '}
          <Img path="H470FMJSide.jpg">Vauxhall Cavalier 2.0 L</Img>. This cav was my 3rd
          2.0, each had seen well over{' '}
          <Img path="10000Miles.jpg">100,000 miles</Img> without any major problems.
        </p>
        <p>
          Christmas came and I had to buy something for my then girlfriend. Perfume, Flowers,
          Nice clothes, I think not, I went out and got a set of alloys from a B reg. cav SRi.
          Much to my surprise she was very happy with this, (did I mention she lives in Essex).
          Next on the list was a set of bumpers from a Belmont SRi, I found a local breaker
          who was very keen to take my money and provide the goods. Soon she had a{' '}
          <Img path="Before.jpg">1.3 4 speed SRi look alike</Img>. Seats and door cards
          followed.
        </p>
        <p>
          By this time I was feeling brave and I got my hands on a F16 5 speed box, and with
          the help of my brother in law in it went. Great — the top speed fell to 105 mph but
          the engine felt a bit more refined.
        </p>
        <p>
          By this time my own cav had seen a{' '}
          <Img path="L944ABCFrontEnd.jpg">fiesta very closely</Img> and I had changed my car
          to a cav 1.7 TD. The Belmont had started to rust and things were looking grim. I was
          driving down the main road when a gleaming white Belmont CDi caught my eye, strange
          because I don't normally look at the garage as I pass. I went home and talked to my
          girlfriend, she was ok with the idea and for some reason MBNA bank had given me a
          cheque book with my credit card. Off I went, a deal was struck and I had a rust free
          Belmont with 115 bhp to play with.
        </p>
        <p>
          Next I needed to change the alloys, Elite took care of this with a set of
          Speedline&nbsp;16″. I had seen an advert for Belmont body kits and I had some credit
          left on the card so off she went. Side skirts, bonnet vents. I had swapped the boot
          spoiler from the rusty 1.3 by this time, and when she came back she{' '}
          <Img path="BeforeBumpers.jpg">looked really silly</Img>.
        </p>
        <p>
          The problem was that I hadn't expected the car to look silly with only the side
          skirts finished, so off she went for a new front and rear bumper. I found a pair of{' '}
          <Img path="Mirror.jpg">M3 mirrors</Img> out of Fast Car.{' '}
          <Img path="FrontAngleCar.jpg">Looking much better</Img>, I wanted to do some engine
          work now.
        </p>
        <p>
          The 16V 2.0l GTE has always been a storming success, very fast and good looking
          (sorry XR3i fans). I got out the Haynes manual and studied it for hours. I spoke to
          the local breaker and they thought it would be possible to fit a 16V in without too
          much trouble. The problem was finding an engine, and the electrics worried me a bit.
          The solution in the local auto trader was a 16V GTE, stolen and recovered in Canvey
          Island. So off I went to see my new engine. The car was piled up on scaffolding
          looking very sad with the front and back lightly smashed. The engine bay looked ok
          so I struck a deal based on the car starting when delivered and went home to wait for
          my project to really start.
        </p>
        <p>
          The next day the car came, it started and sounded very good; the fuel tank had a
          leak so the car only ran for a few minutes but that was good enough for me. I parked
          the car next to mine and started to strip it down, making a careful note of where it
          all came from. After a few days the car was in bits and I was ready to start the{' '}
          <Img path="NoSeats.jpg">strip down of the Belmont</Img>. I took out everything
          including the electrics — the idea was that the GTE loom would fit straight into the
          Belmont. If you were thinking it won't fit because the GTE is smaller, then you were
          right. I had to cut both looms and re-connect each wire just behind the back seat.
          Next problem was the colours: on a GTE, blue is for the rear wiper; on the Belmont it
          was for the fuel pump. If I hadn't sussed this it would have been fun — the car would
          only pump fuel when the rear wiper was on. After much swearing and burning of fingers
          with the soldering iron the electrics were in. Next was the task of fitting the rear
          discs — drop the old axle and put in the new one, add a 14 lb hammer and presto,
          fitted. I wanted to put the{' '}
          <Img path="NoEngineABS.jpg">ABS</Img> from the GTE across; everyone I spoke to said
          it couldn't be done so I had even more incentive to make it fit. The brackets in the
          engine bay were already there, a quick trip to my local Vauxhall dealer and I had the
          correct fittings. I fitted the new discs all round and set up the ABS sensors; as I
          had changed the loom the cables were already there. Next my brother in law made up
          some new pipes to the ABS unit.
        </p>
        <p>
          We took out the old engine and stripped down the{' '}
          <Img path="Engine.jpg">GTE engine</Img> to check the condition before it went in.
          Things weren't looking very good as the flywheel was really badly damaged — there was
          no clutch. I think the thieves had caned hell out of it before it was found. We
          changed the clutch to a paddle clutch (never, never do this and expect to look cool
          at the lights — a paddle clutch is hell to live with). We changed all the oil,
          gearbox fluid etc. and fitted the GTE engine. The mounts are the same so no problems
          there. The water bottle needed to be moved as did the air box. I was hoping to use
          the short-shift gear stick from the GTE but due to the CAT, the GTE tunnel put the
          gear selector through the bulkhead whereas the 1.8i setup dropped in under the car.
          We thought about making a new hole in the bulkhead but decided not to bother. The
          next big problem was the radiator: on a 1.8i the rad is small and not very deep; on
          the GTE the rad is bigger and sits at a different height. The pipes from the rad to
          the engine didn't fit. We made up some pipes and bent them to shape — didn't look
          very good but it fitted. I had been shopping at Elite while I was doing this and had
          bought a Jetex 1.8i full exhaust system; it was the biggest I could buy and still
          have it fit the car (remember it is longer and won't take a twin tail pipe because of
          the rear bumper). I got a set of GTE Jamex springs and Spax shocks. Black Diamond
          rear discs and Bembro front discs with Mintex pads. The exhaust wasn't a good fit
          and it needed the skills of my brother in law to cut and weld it into shape. We used
          a bit from a Range Rover V8 to make it fit.
        </p>
        <p>
          I put the driving seat back in the car and off I went up the road on the first test
          drive. Due to the exhaust not fitting, the engine had a really meaty note and with no
          interior in the car it didn't weigh much. I let it warm up and then gave it a boot.
          She spun in first, I changed and booted it again, another wheel spin — this was
          great, I had actually built a{' '}
          <Img path="BonnetUpSide.jpg">16V Belmont</Img>. It felt great. I put the car back
          together again and started to save for the next big stage.
        </p>
        <p>
          I had always known of Courtenay's through the mags, and I gave Chris a call. He was
          interested in what I had done and after a while I was drooling with anticipation at
          the idea of 200+ bhp.
        </p>
        <p>
          I saved for what felt like ages and then I made the call and booked her in for a
          Turbo. I drove the car up to Norwich and gave John the keys with the instructions to
          fit a Turbo, colour code the rocker cover and fit a strut brace. It took a few weeks
          and then she was ready. I went up to collect my new car not sure what I had done.
          Chris gave me the keys and smiled — &ldquo;give it a go while I sort out the paper
          work&rdquo; he said, and handed me the keys.
        </p>
        <p>
          It was a wet morning and I didn't really know the roads but off I went. She started
          first time and purred on tick over. I set off down some country road and off into the
          distance; again I let her warm up and then I let the Turbo come in. I had no idea
          what it would be like — I had driven a cav Turbo in the past but she took off, wheel
          spinning all over the road. I changed gear and wheel spun again; a quick look at the
          clock and I was doing 60 already. I went back to pay Chris with the biggest grin I
          have ever had on my face. I now had a{' '}
          <Img path="HiRes/EngineHiRes.jpg">16V Turbo Belmont</Img>.
        </p>
        <p>
          Ultimate Fast Car 97 was coming up and I wanted to find out how fast she was. I
          packed my tent, wife and 6-month-old son and set off for Santapod. On the Saturday
          the track was dry and I got three runs in. I got a time of{' '}
          <Img path="HiRes/QtrMileHiRes.jpg">14.827</Img> which was pretty good for a granddad
          car.
        </p>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  )
}
