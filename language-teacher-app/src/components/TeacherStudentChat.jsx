import './TeacherStudentChat.css'; // Стилі для адаптивності

const TeacherStudentChat = () => {
  return (
    <div className="chat-container">
      <div className="chat-box teacher-box">
        <p className="chat-title">Титри Вчитель</p>
        <p className="chat-content">Привіт, як у тебе справи?</p>
      </div>
      <div className="chat-box student-box">
        <p className="chat-title">Титри Учень</p>
        <p className="chat-content">Все добре, дякую!</p>
      </div>
    </div>
  );
};

export default TeacherStudentChat;











