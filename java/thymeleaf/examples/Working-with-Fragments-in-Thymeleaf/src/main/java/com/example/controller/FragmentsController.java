package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.dto.StudentUtils;

@Controller
public class FragmentsController {
	@GetMapping("/fragments")
	public String getHome(Model model) {
		model.addAttribute("data", StudentUtils.buildStudents());
		return "fragments";
	}
	
	@GetMapping("/markup")
	public String markupPage() {
		return "markup";
	}
	
	@GetMapping("/params")
	public String paramsPage() {
		return "params";
	}
	
	@GetMapping("/other")
	public String otherPage(Model model) {
		model.addAttribute("data", StudentUtils.buildStudents());
		return "other";
	}
}
