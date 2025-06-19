package com.example.emps_backend.mapper;

import com.example.emps_backend.dto.EmployeeDto;
import com.example.emps_backend.entity.Employee;

public class EmployeeMapper {


    public static EmployeeDto mapToEmployeeDto(Employee employees){
        return new EmployeeDto(
                employees.getId(),
                employees.getFirstName(),
                employees.getLastName(),
                employees.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
