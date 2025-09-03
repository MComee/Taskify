
export default function TestimonialCard({ author, content }) {
  return (
    <div className="testimonial-item">
      <p>{content}</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">{/* Avatar for John Doe */}</div>
        <p>{author}</p>
      </div>
    </div>
  );
}
