// 'use client';

// import { useParams } from 'next/navigation';
// import NoteEditor from '@/app/components/NoteEditor/NoteEditor';
// import Header from '@/app/components/Header/Header';

// export default function NotePage() {
//   const params = useParams();
//   const noteId = params.id as string;

//   if (!noteId) {
//     return <div>Invalid note ID</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <Header />
//       <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 font-sans">
//           Edit Note
//         </h1>
//         <NoteEditor noteId={noteId} />
//       </main>
//       <footer className="text-center text-gray-500 font-mono py-4">
//         <p>&copy; 2024 ScribbleShare. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }
import React from 'react';
import Header from '@/app/components/Header/Header';
import NoteEditor from '../../components/NoteEditor/NoteEditor';

interface NotePageProps {
  params: {
    id: string;
  };
}

const NotePage: React.FC<NotePageProps> = ({ params }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-start py-8">
        <div className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-lg">
          <NoteEditor noteId={params.id} />
        </div>
      </main>
    </div>
  );
};

export default NotePage;