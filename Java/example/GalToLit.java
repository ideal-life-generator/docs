/*

	Try This 1-1

	This program convers gallons to liters.

*/

class GalToLit {
	public static void main(String args[]) {
		double gallons,
					 liters;

		gallons = 10;

		liters = gallons * 3.7854;

		System.out.println(gallons + " gallons is " + liters + " liters.");

		if(10 < 11) System.out.println("10 is less than 11");

		if(10 < 9) System.out.println("this won't be displayed");
	}
}