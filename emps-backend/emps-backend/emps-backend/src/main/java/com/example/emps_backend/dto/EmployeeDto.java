package com.example.emps_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class EmployeeDto {

    private long id;
    private String firstName;
    private String lastName;
    private String email;

}
