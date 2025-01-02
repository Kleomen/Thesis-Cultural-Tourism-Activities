import React from 'react';

const AboutCrete = () => {
  return (
  <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-gray-100 text-gray-800 p-8 space-y-6">
        {/* Introduction Section */}
        <section>
          <h1 className="text-3xl font-bold text-center mb-4">Discover Crete</h1>
          <p>
            Crete, the largest island in Greece, is a vibrant tapestry of ancient history, stunning landscapes, and rich culture. 
            Nestled in the southern part of the Aegean Sea, it offers visitors a unique blend of modern luxury and timeless tradition.
          </p>
        </section>

        {/* Historical Significance */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-center">Historical Significance</h2>
          <ul className="list-disc list-inside text-center">
            <li>
              <strong>Home of the Minoan Civilization:</strong> Visit the famous <em>Palace of Knossos</em>, a stunning archaeological site.
            </li>
            <li>
              <strong>Greek Mythology:</strong> Legend has it that Zeus, the king of the gods, was born on Crete in the <em>Dikteon Cave</em>.
            </li>
            <li>
              <strong>Venetian and Ottoman Influence:</strong> Explore the charming Venetian harbors and architecture.
            </li>
          </ul>
        </section>

        {/* Natural Wonders */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-center">Natural Wonders</h2>
          <ul className="list-disc list-inside text-center">
            <li>
              <strong>Samaria Gorge:</strong> A UNESCO Biosphere Reserve and a hiker's paradise.
            </li>
            <li>
              <strong>Elafonissi Beach:</strong> Famous for its pink sand and turquoise waters.
            </li>
            <li>
              <strong>Balos Lagoon:</strong> A stunning lagoon with shallow, crystal-clear waters.
            </li>
          </ul>
        </section>

        {/* Cretan Culture */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-center">Cretan Culture</h2>
          <p>
            The Cretan diet is one of the healthiest in the world, emphasizing fresh, local ingredients like olive oil, vegetables, and seafood. 
            Don't miss trying dishes like <em>Dakos</em> (Cretan-style bruschetta) and sipping on <em>Raki</em>, a local spirit.
          </p>
        </section>

        {/* Why Visit Crete? */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-center">Why Visit Crete?</h2>
          <ul className="list-disc list-inside text-center">
            <li>
              <strong>Rich History:</strong> From ancient Minoan ruins to Venetian and Ottoman architecture.
            </li>
            <li>
              <strong>Stunning Nature:</strong> Beaches, mountains, and gorges make Crete a paradise for nature lovers.
            </li>
            <li>
              <strong>Warm Hospitality:</strong> Locals are famous for their friendliness and welcoming nature.
            </li>
            <li>
              <strong>Year-Round Destination:</strong> With a mild climate, Crete is perfect for visits in all seasons.
            </li>
          </ul>
        </section>

        {/* Fun Facts */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-center">Fun Facts</h2>
          <ul className="list-disc list-inside text-center">
            <li>
              Crete is the fifth-largest island in the Mediterranean Sea.
            </li>
            <li>
              The island has over 4,000 caves, many of which have mythical significance.
            </li>
            <li>
              Olive trees in Crete are some of the oldest in the world, with some over 2,000 years old still producing olives.
            </li>
            <li>
              Crete has its own unique dialect and traditional costumes, adding to its distinct cultural identity.
            </li>
          </ul>
        </section>
    </div>
  </div>
  );
};

export default AboutCrete;
