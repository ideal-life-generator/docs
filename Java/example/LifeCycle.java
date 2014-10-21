class LifeCycle {
	public static void main(String args[]) {
		int x;

		for(x = 0; x < 3; x++) {
			int y = -1;
			System.out.println("y is: " + y);
			y = 100;
			System.out.println("y is now: " + y);
		}
	}
}

class NestVar {
	public static void main(String args[]) {
		int count;

		for(count = 0; count < 10; count ++) {
			System.out.println("This is count: " + count);

			int count;
			for(count = 0; count < 2; count++) {
				System.out.println("This program is in error!");
			}
		}
	}
}