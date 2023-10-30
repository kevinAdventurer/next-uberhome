const CustomPrevArrow = (props: any) => {
  const { onClick } = props;

  return (
    <div className={`slick-prev-arrow`} onClick={onClick}></div>
  )
}

export default CustomPrevArrow;