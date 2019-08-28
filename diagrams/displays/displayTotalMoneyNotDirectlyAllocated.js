
function displayTotalMoneyNotDirectlyAllocated(x, y, isVertical) {

  fill("#111111")
  textSize(17 );
  textAlign(LEFT, BOTTOM);
  text('Money not directly allocated', x + 5, y - 4);

  fill('#afafaf');
  const totalProportionMoneyNotDirectlyAllocated = getTotalProportionMoneyNotDirectlyAllocated();
  const lengthTotalMoneyNotDirectlyAllocated = totalScale * totalProportionMoneyNotDirectlyAllocated;
  drawRect(x, y, widthRect , lengthTotalMoneyNotDirectlyAllocated, isVertical)
}