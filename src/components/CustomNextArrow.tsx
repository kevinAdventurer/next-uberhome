const CustomNextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <div className={`slick-next-arrow`} onClick={onClick}></div>
  )
}

export default CustomNextArrow;