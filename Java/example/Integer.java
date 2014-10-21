/*

	Compute the number of cubic inches in 1 cubic mile

*/

class Inches {
	public static void main(String args[]) {
		long ci,
			 im;

		im = 5280 * 12;

		ci = im * im * im;

		System.out.println("There are " + ci + " cubic inches in cubic mile.");
	}
}

/*

	Use the Pythagorean theorem to find the length of the hypotenuse given the lengths of the two opposing site.

*/

class Hypot {
	public static void main(String args[]) {
		double x, y, z;

		x = 3;
		y = 4;

		z = Math.sqrt(x * x + y * y);

		System.out.println("Hypotenuse is " + z);
	}
}

class CharArithDemo {
	public static void main(String args[]) {
		char ch;

		ch = 'X';
		System.out.println("ch contains " + ch);

		ch++;
		System.out.println("ch is now " + ch);

		ch = 90;
		System.out.println("ch is now " + ch);
	}
}

class BooleanTest {
	public static void main(String args[]) {
		System.out.println("boolean value " + (10 < 9));
	}
}