import React from 'react';
import LeadershipProfile from './LeadershipProfile';

const LeadershipSection: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4f46e5' }}>
        Nuestro Equipo de Liderazgo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <LeadershipProfile
          src="/leader1.jpg"
          name="Daniel Carrillon"
          title="Chief Executive Officer (CEO)"
          description="Enfocado en resolver problemas con las nuevas tecnologías."
        />
        <LeadershipProfile
          src="/leader2.jpg"
          name="Joseph Benavides"
          title="Chief Technology Officer (CTO)"
          description="Enfocado en integrar la tecnología en soluciones prácticas."
        />
        {/* Añadir más perfiles según sea necesario */}
      </div>
    </div>
  );
};

export default LeadershipSection;
