package com.example.emps_backend.service;

import com.example.emps_backend.dto.EmployeeDto;
import com.example.emps_backend.entity.Employee;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

    void deleteEmployee(Long employeeId);
}
