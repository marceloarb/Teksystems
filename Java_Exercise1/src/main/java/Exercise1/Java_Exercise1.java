package Exercise1;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Java_Exercise1 {
	private static Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {
		SpringApplication.run(Java_Exercise1.class, args);
		System.out.println("Hello world");
		int[] array = {2,3,4,20,30,40};

		reverse(array);
	}
//	 SortArray with arrays;
	int[] myIntegers = getIntegers(3);
	int[] mySortedArray = sortIntegers(myIntegers);

	
	public static void printArray(int[] array) {
		for(int i=0; i<array.length; i++) {
			System.out.println("Element " + i + " contents " + array[i]);
		}
	}
	
	@RequestMapping("/")
	public String hello() {
		return "Hello World";
	}
	
	public static int[] getIntegers(int capacity) {
		int[] array = new int[capacity];
		System.out.println("Enter "+ capacity + "integer values:\r");
		for(int i=0; i<array.length; i++) {
			array[i] = scanner.nextInt();
			
		}
			
			return array;
		}
	
	public static int[] sortIntegers(int[] array) {
		int[] sortedArray = Arrays.copyOf(array, array.length);
		boolean flag = true;
		int temp;
		while(flag) {
			flag = false;
			for(int i=0; i<sortedArray.length-1; i++) {
				if(sortedArray[i] < sortedArray[i+1]) {
					temp = sortedArray[i];
					sortedArray[i] = sortedArray[i+1];
					sortedArray[i+1] = temp;
					flag = true;
					
				}
			}
		}
		printArray(sortedArray);
		return sortedArray;
	}

	// Reverse Array:
	
	
	

	public static void reverse(int[] array) {
		
		int temp;
		for(int i = 0; i<array.length/2; i++) {
			temp = array[i];
			array[i] = array[array.length-1];
			array[array.length-1] = temp;
			
		}
	}
	
	
	

}
