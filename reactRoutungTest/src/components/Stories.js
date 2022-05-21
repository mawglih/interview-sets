import Card from './Card';
const Stories = () => {
  return (
    <div className="stories-container">
      <div className="stories-title">
        <h2>Stories</h2>
      </div>
      <div className="stories-content">
        <Card
          title="Title1"
          subtitle="Subtitle1"
        />
        <Card
          title="Title2"
          subtitle="Subtitle2"
        />
        <Card
          title="Title3"
          subtitle="Subtitle3"
        />
      </div>

    </div>
  )
}
export default Stories;
