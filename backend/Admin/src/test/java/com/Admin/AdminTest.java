package com.Admin;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import com.admin.model.Admin;
import com.admin.repository.AdminRepository;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = {AdminTest.class})
public class AdminTest {

    @Mock
            @InjectMocks
    AdminRepository adminRepository;
    public List<Admin> admins;


    @Test
    @Order(1)
    public void test_getAllAdmins() {

        List<Admin> admins=new ArrayList<Admin>();
        admins.add(new Admin("01","admin","Admin@gmail.com","Admin@1"));

        when(adminRepository.findAll()).thenReturn(admins);}



}
