import utils from "@/utils/index";
const PriceConversion = (val :any,bit = 2) => {
	if (!val) return '0.00';
  if(Number(val) < 1e-8)return'0.00'
	return utils.getBit(Number(val), bit)
}
const SquareRoot = (val :any,bit = 2) => {
	if (!val) return '0';
	return utils.getBit(Number(val) / 1e2, bit)
}
const MultiplyBySquare = (val :any,bit = 2) => {
	if (!val) return '0';
	return utils.getBit(Number(val) * 1e2, bit)
}
// const PriceConversion = (val :any,bit = 2) => {
// 	if (!val) return '0.00';
//   if(Number(val) < 1e-8)return'0.00'
// 	return utils.getBit(Number(val), bit)
// }
export default { PriceConversion,SquareRoot,MultiplyBySquare};