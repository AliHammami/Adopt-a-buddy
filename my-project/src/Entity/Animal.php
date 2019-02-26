<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(normalizationContext={"groups"={"animal"}})
 * @ORM\Entity(repositoryClass="App\Repository\AnimalRepository")
 */
class Animal
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"animal"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"animal"})
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @Groups({"animal"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     * @Groups({"animal"})
     */
    private $age;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"animal"})
     */
    private $created_at;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Races", inversedBy="animals")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"animal"})
     */
    private $race;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Coats", inversedBy="animals")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"animal"})
     */
    private $coats;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Colors", inversedBy="animals")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"animal"})
     */
    private $color;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Size", inversedBy="animals")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"animal"})
     */
    private $size;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Sex", inversedBy="animals")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"animal"})
     */
    private $sex;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Status", inversedBy="animals")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"animal"})
     */
    private $status;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Photo", mappedBy="animal")
     * @Groups({"animal"})
     */
    private $photos;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Association", inversedBy="animals")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"animal"})
     */
    private $association;

    public function __construct()
    {
        $this->created_at = new \DateTime('now');
        $this->photos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAge(): ?string
    {
        return $this->age;
    }

    public function setAge(?string $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getRace(): ?Races
    {
        return $this->race;
    }

    public function setRace(?Races $race): self
    {
        $this->race = $race;

        return $this;
    }

    public function getCoats(): ?Coats
    {
        return $this->coats;
    }

    public function setCoats(?Coats $coats): self
    {
        $this->coats = $coats;

        return $this;
    }

    public function getColor(): ?Colors
    {
        return $this->color;
    }

    public function setColor(?Colors $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getSize(): ?Size
    {
        return $this->size;
    }

    public function setSize(?Size $size): self
    {
        $this->size = $size;

        return $this;
    }

    public function getSex(): ?Sex
    {
        return $this->sex;
    }

    public function setSex(?Sex $sex): self
    {
        $this->sex = $sex;

        return $this;
    }

    public function getStatus(): ?Status
    {
        return $this->status;
    }

    public function setStatus(?Status $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection|Photo[]
     */
    public function getPhotos(): Collection
    {
        return $this->photos;
    }

    public function addPhoto(Photo $photo): self
    {
        if (!$this->photos->contains($photo)) {
            $this->photos[] = $photo;
            $photo->setAnimal($this);
        }

        return $this;
    }

    public function removePhoto(Photo $photo): self
    {
        if ($this->photos->contains($photo)) {
            $this->photos->removeElement($photo);
            // set the owning side to null (unless already changed)
            if ($photo->getAnimal() === $this) {
                $photo->setAnimal(null);
            }
        }

        return $this;
    }

    public function getAssociation(): ?Association
    {
        return $this->association;
    }

    public function setAssociation(?Association $association): self
    {
        $this->association = $association;

        return $this;
    }
    public function __toString() {
        return $this->name;
    }
}
