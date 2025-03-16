import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import aiAvatar from '../assets/ai.jpeg';
import chatIcon from '../assets/ai.jpeg';

const predefinedQuestions = [
  { question: "Apa itu energi minyak bumi?", answers: ["Energi minyak bumi dihasilkan dari minyak mentah yang digunakan sebagai bahan bakar utama.", "Minyak bumi adalah sumber daya alam yang penting."] },
  { question: "Bagaimana proses pembentukan minyak bumi?", answers: ["Minyak bumi terbentuk dari organisme laut yang mati berjuta tahun lalu.", "Proses ini memakan waktu jutaan tahun."] },
  { question: "Apa manfaat energi minyak?", answers: ["Energi minyak digunakan dalam transportasi, industri, hingga pembangkit listrik.", "Minyak juga digunakan dalam produk sehari-hari."] },
  { question: "Apa dampak lingkungan dari minyak bumi?", answers: ["Polusi udara, tumpahan minyak, dan kerusakan ekosistem.", "Penggunaan minyak bumi berkontribusi pada perubahan iklim."] },
  { question: "Apa itu energi terbarukan?", answers: ["Energi terbarukan adalah energi yang diperoleh dari sumber yang dapat diperbaharui, seperti matahari, angin, dan air.", "Contoh energi terbarukan termasuk solar, angin, dan hidroelektrik."] },
  { question: "Apa itu gas alam?", answers: ["Gas alam adalah sumber energi fosil yang terdiri dari metana dan hidrokarbon lainnya.", "Gas alam digunakan untuk pemanasan, memasak, dan pembangkit listrik."] },
  { question: "Apa itu energi nuklir?", answers: ["Energi nuklir dihasilkan dari reaksi nuklir, biasanya melalui fusi atau fisi.", "Energi ini digunakan dalam pembangkit listrik dan aplikasi medis."] },
  { question: "Apa itu energi surya?", answers: ["Energi surya adalah energi yang diperoleh dari sinar matahari.", "Panel surya digunakan untuk mengubah sinar matahari menjadi listrik."] },
  { question: "Apa itu energi angin?", answers: ["Energi angin dihasilkan dari pergerakan udara dan digunakan untuk menghasilkan listrik.", "Turbine angin mengubah energi kinetik angin menjadi energi listrik."] },
  { question: "Apa itu energi hidro?", answers: ["Energi hidro adalah energi yang dihasilkan dari aliran air, biasanya melalui bendungan.", "Pembangkit listrik tenaga air menggunakan energi kinetik air untuk menghasilkan listrik."] },
  { question: "Apa itu energi biomassa?", answers: ["Energi biomassa berasal dari bahan organik, seperti tanaman dan limbah hewan.", "Biomassa dapat digunakan untuk menghasilkan listrik, panas, dan bahan bakar."] },
  { question: "Apa itu efisiensi energi?", answers: ["Efisiensi energi adalah penggunaan energi yang lebih sedikit untuk memberikan tingkat layanan yang sama.", "Menggunakan peralatan hemat energi adalah contoh efisiensi energi."] },
  { question: "Apa itu jejak karbon?", answers: ["Jejak karbon adalah total emisi gas rumah kaca yang dihasilkan oleh individu, organisasi, atau produk.", "Mengurangi jejak karbon dapat membantu memerangi perubahan iklim."] },
  { question: "Apa itu pemanasan global?", answers: ["Pemanasan global adalah peningkatan suhu rata-rata Bumi akibat emisi gas rumah kaca.", "Pemanasan global dapat menyebabkan perubahan iklim yang ekstrem."] },
  { question: "Apa itu perubahan iklim?", answers: ["Perubahan iklim adalah perubahan jangka panjang dalam suhu dan pola cuaca Bumi.", "Perubahan iklim dapat disebabkan oleh aktivitas manusia dan faktor alami."] },
  { question: "Apa itu energi geothermal?", answers: ["Energi geothermal adalah energi yang dihasilkan dari panas bumi.", "Pembangkit listrik tenaga geothermal menggunakan uap panas untuk menghasilkan listrik."] },
  { question: "Apa itu energi laut?", answers: ["Energi laut adalah energi yang dihasilkan dari gelombang, arus, dan perbedaan suhu laut.", "Teknologi energi laut masih dalam tahap pengembangan."] },
  { question: "Apa itu kendaraan listrik?", answers: ["Kendaraan listrik adalah kendaraan yang menggunakan motor listrik sebagai penggerak.", "Kendaraan listrik dapat mengurangi emisi gas rumah kaca."] },
  { question: "Apa itu kendaraan hibrida?", answers: ["Kendaraan hibrida menggunakan kombinasi mesin pembakaran internal dan motor listrik.", "Kendaraan hibrida lebih efisien dibandingkan kendaraan konvensional."] },
  { question: "Apa itu bahan bakar fosil?", answers: ["Bahan bakar fosil adalah sumber energi yang berasal dari sisa-sisa organisme purba, seperti minyak, gas, dan batu bara.", "Bahan bakar fosil adalah penyebab utama emisi karbon dioksida."] },
  { question: "Apa itu energi alternatif?", answers: ["Energi alternatif adalah sumber energi yang dapat menggantikan bahan bakar fosil.", "Contoh energi alternatif termasuk energi terbarukan dan energi nuklir."] },
  { question: "Apa itu limbah energi?", answers: ["Limbah energi adalah energi yang terbuang dan tidak dimanfaatkan.", "Mengurangi limbah energi dapat meningkatkan efisiensi energi."] },
  { question: "Apa itu konservasi energi?", answers: ["Konservasi energi adalah praktik mengurangi konsumsi energi.", "Menggunakan peralatan hemat energi adalah salah satu cara untuk melakukan konservasi energi."] },
  { question: "Apa itu sistem energi terdistribusi?", answers: ["Sistem energi terdistribusi adalah sistem yang menghasilkan energi di lokasi dekat dengan pengguna.", "Contoh termasuk panel surya di atap rumah."] },
  { question: "Apa itu smart grid?", answers: ["Smart grid adalah jaringan listrik yang menggunakan teknologi informasi untuk meningkatkan efisiensi dan keandalan.", "Smart grid memungkinkan pengelolaan energi yang lebih baik."] },
  { question: "Apa itu penyimpanan energi?", answers: ["Penyimpanan energi adalah proses menyimpan energi untuk digunakan di masa depan.", "Contoh penyimpanan energi termasuk baterai dan pompa hidroelektrik."] },
  { question: "Apa itu energi terbarukan?", answers: ["Energi terbarukan adalah energi yang diperoleh dari sumber yang dapat diperbaharui, seperti matahari, angin, dan air.", "Contoh energi terbarukan termasuk solar, angin, dan hidroelektrik."] },
  { question: "Apa itu energi bersih?", answers: ["Energi bersih adalah energi yang dihasilkan dengan dampak lingkungan yang minimal.", "Energi terbarukan sering dianggap sebagai energi bersih."] },
  { question: "Apa itu emisi karbon?", answers: ["Emisi karbon adalah pelepasan karbon dioksida ke atmosfer.", "Emisi karbon berasal dari pembakaran bahan bakar fosil."] },
  { question: "Apa itu energi terbarukan?", answers: ["Energi terbarukan adalah energi yang diperoleh dari sumber yang dapat diperbaharui, seperti matahari, angin, dan air.", "Contoh energi terbarukan termasuk solar, angin, dan hidroelektrik."] },
  { question: "Apa itu energi bersih?", answers: ["Energi bersih adalah energi yang dihasilkan dengan dampak lingkungan yang minimal.", "Energi terbarukan sering dianggap sebagai energi bersih."] },
  { question: "Apa itu emisi karbon?", answers: ["Emisi karbon adalah pelepasan karbon dioksida ke atmosfer.", "Emisi karbon berasal dari pembakaran bahan bakar fosil."] },
  { question: "Apa itu energi terbarukan?", answers: ["Energi terbarukan adalah energi yang diperoleh dari sumber yang dapat diperbaharui, seperti matahari, angin, dan air.", "Contoh energi terbarukan termasuk solar, angin, dan hidroelektrik."] },
  { question: "Apa itu energi bersih?", answers: ["Energi bersih adalah energi yang dihasilkan dengan dampak lingkungan yang minimal.", "Energi terbarukan sering dianggap sebagai energi bersih."] },
  { question: "Apa itu emisi karbon?", answers: ["Emisi karbon adalah pelepasan karbon dioksida ke atmosfer.", "Emisi karbon berasal dari pembakaran bahan bakar fosil."] },
  { question: "Apa itu energi terbarukan?", answers: ["Energi terbarukan adalah energi yang diperoleh dari sumber yang dapat diperbaharui, seperti matahari, angin, dan air.", "Contoh energi terbarukan termasuk solar, angin, dan hidroelektrik."] },
  { question: "Apa itu energi bersih?", answers: ["Energi bersih adalah energi yang dihasilkan dengan dampak lingkungan yang minimal.", "Energi terbarukan sering dianggap sebagai energi bersih."] },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(() => JSON.parse(localStorage.getItem('answeredQuestions')) || []);
  const [messages, setMessages] = useState(() => JSON.parse(localStorage.getItem('messages')) || []);
  const [typing, setTyping] = useState(false);
  const [showEndMessage, setShowEndMessage] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const chatEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
    localStorage.setItem('messages', JSON.stringify(messages));
    if (answeredQuestions.length === predefinedQuestions.length) setShowEndMessage(true);
  }, [answeredQuestions, messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const handleQuestionClick = (index) => {
    const { question, answers } = predefinedQuestions[index];
    setAnsweredQuestions((prev) => [...prev, index]);
    setMessages((prev) => [...prev, { type: 'question', text: question }]);
    setTyping(true);

    setMessages((prev) => [...prev, { type: 'thinking', text: 'Sedang berpikir...' }]);

    setTimeout(() => {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1];
        return [...prev.slice(0, -1), { type: 'answer', text: randomAnswer }];
      });
      setTyping(false);
      setCurrentQuestionIndex((prev) => prev + 1);
    }, 2000);
  };

  const resetChat = () => {
    setAnsweredQuestions([]);
    setMessages([]);
    setShowEndMessage(false);
    setCurrentQuestionIndex(0);
    localStorage.removeItem('answeredQuestions');
    localStorage.removeItem('messages');
  };

  const filteredQuestions = predefinedQuestions.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const questionsToDisplay = filteredQuestions.slice(currentQuestionIndex, currentQuestionIndex + 4);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
        whileTap={{ scale: 0.9 }}
      >
        <img src={chatIcon} alt="Chat Icon" className="w-full h-full rounded-full object-cover" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm rounded-xl shadow-xl bg-white flex flex-col overflow-hidden mt-4"
        >
          <div className="flex items-center bg-blue-600 p-3 relative">
            <img src={aiAvatar} alt="Chatbot Avatar" className="w-8 h-8 rounded-full mr-2" />
            <h1 className="text-white font-semibold text-sm">Virtual Assistant</h1>
            <span className="ml-auto text-white text-xs">{answeredQuestions.length}/{predefinedQuestions.length}</span>
            <button onClick={resetChat} className="ml-2 text-white text-xs">Reset</button>
          </div>

          <input
            type="text"
            placeholder="Cari pertanyaan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border-b border-gray-300"
          />

          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: '60vh' }}>
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'question' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-lg shadow text-sm ${msg.type === 'question' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3 shadow text-sm animate-pulse">
                  Mengetik jawaban...
                </div>
              </div>
            )}
            {showEndMessage && (
              <div className="bg-green-100 text-green-800 rounded-lg p-3 shadow text-sm text-center">
                Semua pertanyaan telah dijawab. Terima kasih!
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="bg-gray-50 p-3 flex flex-wrap gap-2 border-t">
            {questionsToDisplay.map((item, index) => (
              !answeredQuestions.includes(filteredQuestions.indexOf(item)) && (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(filteredQuestions.indexOf(item))}
                  className="bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-xs hover:bg-blue-200 transition"
                >
                  {item.question}
                </button>
              )
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;