import React from 'react'
import Competition from './Competition'

const Competitions = () => {
  return (
    <div className="bg-orange-custom">
      <div className="ml-10 p-6 bg-groupDance bg-contain bg-no-repeat mb-5">
        <Competition
          title="GROUP DANCE (IN SYNC)"
          text={`As Jacques dAmbrose once said, "Dance is your pulse, your heartbeat, your breathing. It’s the rhythm of your life. It's the expression in time and movement, in happiness, joy, sadness and envy." Reinvigorate this pulse at the grand stage of the 10th Edition of Aarohan as your team synchronizes their passions and sets the platform on fire at INSYNC, the group dance off. Register soon, a cheering audience awaits your performance!`}
        />
      </div>

      <div className="ml-10 p-6 bg-bandWars bg-contain bg-no-repeat">
      <Competition
          title="BAND WARS (HEAD BANG)"
          text={`Music is to the soul as words are to the mind. Music gives wings to the mind and flights to the imagination and to reach the heights of euphoria Aarohan The Annual Cultural Fest of MITWPU brings you "Head Bang" An uplifting and upbeat band wars with different tones and pitches with melodies and harmonies. Get ready with your rhythms, blues, bass guitars, and percussion instruments creating a soundtrack to the good times.`}
        />
      </div>
    </div>
  )
}

export default Competitions
