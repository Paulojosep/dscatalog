package com.devsuperior.dscaralog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dscaralog.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
