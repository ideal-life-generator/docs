class Arifmethic {
	public static void main(String args[]) {
		int iresult, irem;
		double dresult, drem;

		iresult = 10 / 3;
		irem = 10 % 3;

		dresult = 10.0 / 3.00;
		drem = 10.0 % 3.00;

		System.out.println("Result and remainder of 10 / 3: " + iresult + " " + irem);
		System.out.println("Result and remainder of 10.0 / 3.0: " + dresult + " " + drem);

		int x = 10;
		int y = x++;
		System.out.println("x pre is " + y + " " + x);

		x = 10;
		y = ++x;
		System.out.println("x post is " + y + " " + x);
	}
}