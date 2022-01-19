package com.example.dto;

import java.util.Arrays;
import java.util.List;

public class StudentUtils {

	public static List<Student> buildStudents(){
		return Arrays.asList(
				new Student(1, "Kim"),
				new Student(2, "James"),
				new Student(3, "Xiao"),
				new Student(4, "Nakamura")
				);
	}
}
